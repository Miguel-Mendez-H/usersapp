export default interface UserType {
    id: number;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: { lat: string; lng: string };
    };
    company: { name: string; catchPhrase: string; bs: string };
    name: string;
    phone: string;
    website: string;
  }