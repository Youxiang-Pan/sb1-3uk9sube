export interface Project {
  id: string;
  project_code: string;
  name: string;
  start_date: string;
  estimated_completion_date: string;
  actual_completion_date: string | null;
  progress: number;
  status: 'planning' | 'in_progress' | 'completed' | 'suspended';
  project_manager_id: string;
  budget: number;
  actual_cost: number;
  location: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface ProjectDocument {
  id: string;
  project_id: string;
  document_type: 'contract' | 'purchase_order' | 'grid_connection_review' | 'negotiation_doc' | 'approval_filing' | 'commissioning_letter' | 'other';
  title: string;
  file_url: string;
  uploaded_by: string;
  created_at: string;
}

export interface Worker {
  id: string;
  employee_id: string;
  name: string;
  role: string;
  contact_number: string | null;
  email: string | null;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface AttendanceRecord {
  id: string;
  worker_id: string;
  project_id: string;
  check_in: string;
  check_out: string | null;
  work_hours: number | null;
  status: 'present' | 'late' | 'early_leave' | 'absent';
  notes: string | null;
  created_at: string;
}

export interface ConstructionLog {
  id: string;
  project_id: string;
  log_date: string;
  weather: string;
  temperature: number | null;
  work_description: string;
  issues: string | null;
  solutions: string | null;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface ConstructionPhoto {
  id: string;
  construction_log_id: string;
  photo_url: string;
  description: string | null;
  taken_at: string;
  uploaded_by: string;
  created_at: string;
}

export interface Notification {
  id: string;
  type: 'material_shortage' | 'project_delay' | 'deadline' | 'other';
  title: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'unread' | 'read';
  project_id: string;
  user_id: string;
  created_at: string;
}