/*
  # Purchasing Management System Schema

  1. New Tables
    - `suppliers`
      - Basic supplier information and evaluation metrics
    - `purchase_orders`
      - Purchase order details and tracking
    - `purchase_items`
      - Individual items within purchase orders
    - `inventory_items`
      - Current inventory tracking
    - `material_movements`
      - Track material usage and transfers
    - `project_materials`
      - Project-specific material requirements

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Suppliers table
CREATE TABLE IF NOT EXISTS suppliers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  contact_person text,
  email text,
  phone text,
  address text,
  rating numeric(2,1) CHECK (rating >= 0 AND rating <= 5),
  status text CHECK (status IN ('active', 'inactive', 'blacklisted')) DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Purchase Orders table
CREATE TABLE IF NOT EXISTS purchase_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number text UNIQUE NOT NULL,
  supplier_id uuid REFERENCES suppliers(id),
  project_id uuid NOT NULL,
  status text CHECK (status IN ('draft', 'pending', 'approved', 'ordered', 'received', 'completed', 'cancelled')) DEFAULT 'draft',
  total_amount numeric(12,2) DEFAULT 0,
  created_by uuid NOT NULL,
  approved_by uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  expected_delivery_date date,
  actual_delivery_date date
);

-- Purchase Items table
CREATE TABLE IF NOT EXISTS purchase_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  purchase_order_id uuid REFERENCES purchase_orders(id),
  item_name text NOT NULL,
  description text,
  quantity numeric(10,2) NOT NULL,
  unit text NOT NULL,
  unit_price numeric(10,2) NOT NULL,
  total_price numeric(12,2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
  created_at timestamptz DEFAULT now()
);

-- Inventory Items table
CREATE TABLE IF NOT EXISTS inventory_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  item_code text UNIQUE NOT NULL,
  name text NOT NULL,
  description text,
  category text NOT NULL,
  current_quantity numeric(10,2) DEFAULT 0,
  unit text NOT NULL,
  minimum_quantity numeric(10,2) DEFAULT 0,
  location text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Material Movements table
CREATE TABLE IF NOT EXISTS material_movements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  inventory_item_id uuid REFERENCES inventory_items(id),
  project_id uuid NOT NULL,
  movement_type text CHECK (movement_type IN ('in', 'out', 'transfer')) NOT NULL,
  quantity numeric(10,2) NOT NULL,
  from_location text,
  to_location text,
  created_by uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Project Materials table
CREATE TABLE IF NOT EXISTS project_materials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL,
  inventory_item_id uuid REFERENCES inventory_items(id),
  required_quantity numeric(10,2) NOT NULL,
  allocated_quantity numeric(10,2) DEFAULT 0,
  status text CHECK (status IN ('pending', 'partial', 'fulfilled')) DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE material_movements ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_materials ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow authenticated read access" ON suppliers
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON purchase_orders
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON purchase_items
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON inventory_items
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON material_movements
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON project_materials
  FOR SELECT TO authenticated USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_purchase_orders_supplier ON purchase_orders(supplier_id);
CREATE INDEX IF NOT EXISTS idx_purchase_items_po ON purchase_items(purchase_order_id);
CREATE INDEX IF NOT EXISTS idx_material_movements_item ON material_movements(inventory_item_id);
CREATE INDEX IF NOT EXISTS idx_project_materials_project ON project_materials(project_id);