interface child {
  id: string;
  name: string;
  description?: string;
  icon: string;
  isActive: boolean;
}

export class ICategoryResponse {
  id: string;
  name: string;
  description?: string;
  icon: string;
  isActive: boolean;
  childrens: child[];
}
