
interface Booking {
    id: string;
    hostId: string;
    ownerId: string;
    service: string;
    date: Date;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    createdAt: Date;
    updatedAt: Date;
  }
  