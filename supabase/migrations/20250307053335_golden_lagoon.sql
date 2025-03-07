/*
  # Engineering Site Management System Schema

  1. New Tables
    - `projects`
      - Core project information and documents
    - `project_documents`
      - Project-related documents and files
    - `attendance_records`
      - Worker attendance tracking
    - `workers`
      - Worker information
    - `construction_logs`
      - Daily construction progress logs
    - `construction_photos`
      - Site photos documentation
    - `notifications`
      - System notifications

  2. Security
    - Enable RLS on all tables
    - Add policies for different user roles
*/

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_code text UNIQUE NOT NULL,
  name text NOT NULL,
  start_date date NOT NULL,
  estimated_completion_date date NOT NULL,
  actual_completion_date date,
  progress numeric(5,2) DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  status text CHECK (status IN ('planning', 'in_progress', 'completed', 'suspended')) DEFAULT 'planning',
  project_manager_id uuid NOT NULL,
  budget numeric(12,2) NOT NULL,
  actual_cost numeric(12,2) DEFAULT 0,
  location text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Project Documents table
CREATE TABLE IF NOT EXISTS project_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id),
  document_type text CHECK (document_type IN (
    'contract',
    'purchase_order',
    'grid_connection_review',
    'negotiation_doc',
    'approval_filing',
    'commissioning_letter',
    'other'
  )) NOT NULL,
  title text NOT NULL,
  file_url text NOT NULL,
  uploaded_by uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Workers table
CREATE TABLE IF NOT EXISTS workers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id text UNIQUE NOT NULL,
  name text NOT NULL,
  role text NOT NULL,
  contact_number text,
  email text,
  status text CHECK (status IN ('active', 'inactive')) DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Attendance Records table
CREATE TABLE IF NOT EXISTS attendance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  worker_id uuid REFERENCES workers(id),
  project_id uuid REFERENCES projects(id),
  check_in timestamptz NOT NULL,
  check_out timestamptz,
  work_hours numeric(4,2) GENERATED ALWAYS AS (
    EXTRACT(EPOCH FROM (check_out - check_in))/3600.0
  ) STORED,
  status text CHECK (status IN ('present', 'late', 'early_leave', 'absent')) NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Construction Logs table
CREATE TABLE IF NOT EXISTS construction_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid REFERENCES projects(id),
  log_date date NOT NULL,
  weather text NOT NULL,
  temperature numeric(4,1),
  work_description text NOT NULL,
  issues text,
  solutions text,
  created_by uuid NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Construction Photos table
CREATE TABLE IF NOT EXISTS construction_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  construction_log_id uuid REFERENCES construction_logs(id),
  photo_url text NOT NULL,
  description text,
  taken_at timestamptz NOT NULL,
  uploaded_by uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Notifications table
CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text CHECK (type IN ('material_shortage', 'project_delay', 'deadline', 'other')) NOT NULL,
  title text NOT NULL,
  message text NOT NULL,
  priority text CHECK (priority IN ('low', 'medium', 'high', 'urgent')) NOT NULL,
  status text CHECK (status IN ('unread', 'read')) DEFAULT 'unread',
  project_id uuid REFERENCES projects(id),
  user_id uuid NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE workers ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE construction_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE construction_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow authenticated read access" ON projects
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON project_documents
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON workers
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON attendance_records
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON construction_logs
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON construction_photos
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Allow authenticated read access" ON notifications
  FOR SELECT TO authenticated USING (
    auth.uid() = user_id
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_manager ON projects(project_manager_id);
CREATE INDEX IF NOT EXISTS idx_project_documents_project ON project_documents(project_id);
CREATE INDEX IF NOT EXISTS idx_attendance_worker ON attendance_records(worker_id);
CREATE INDEX IF NOT EXISTS idx_attendance_project ON attendance_records(project_id);
CREATE INDEX IF NOT EXISTS idx_construction_logs_project ON construction_logs(project_id);
CREATE INDEX IF NOT EXISTS idx_construction_photos_log ON construction_photos(construction_log_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);