export interface Supplier {
  id: string;
  name: string;
  contact_person: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  rating: number | null;
  status: 'active' | 'inactive' | 'blacklisted';
  created_at: string;
  updated_at: string;
}

export interface PurchaseOrder {
  id: string;
  order_number: string;
  supplier_id: string;
  project_id: string;
  status: 'draft' | 'pending' | 'approved' | 'ordered' | 'received' | 'completed' | 'cancelled';
  total_amount: number;
  created_by: string;
  approved_by: string | null;
  created_at: string;
  updated_at: string;
  expected_delivery_date: string | null;
  actual_delivery_date: string | null;
}

export interface PurchaseItem {
  id: string;
  purchase_order_id: string;
  item_name: string;
  description: string | null;
  quantity: number;
  unit: string;
  unit_price: number;
  total_price: number;
  created_at: string;
}

export interface InventoryItem {
  id: string;
  item_code: string;
  name: string;
  description: string | null;
  category: string;
  current_quantity: number;
  unit: string;
  minimum_quantity: number;
  location: string | null;
  created_at: string;
  updated_at: string;
}

export interface MaterialMovement {
  id: string;
  inventory_item_id: string;
  project_id: string;
  movement_type: 'in' | 'out' | 'transfer';
  quantity: number;
  from_location: string | null;
  to_location: string | null;
  created_by: string;
  created_at: string;
}

export interface ProjectMaterial {
  id: string;
  project_id: string;
  inventory_item_id: string;
  required_quantity: number;
  allocated_quantity: number;
  status: 'pending' | 'partial' | 'fulfilled';
  created_at: string;
  updated_at: string;
}