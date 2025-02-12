
export interface Appointment {
  id: string;
  customerName: string;
  date: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  measurements: {
    chest: number;
    waist: number;
    hips: number;
    inseam: number;
    [key: string]: number;
  };
  tailorId: string;
}

export interface Tailor {
  id: string;
  name: string;
  status: 'active' | 'busy' | 'offline';
  rating: number;
  appointments: number;
  completionRate: number;
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}
