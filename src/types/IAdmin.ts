export interface IAdmin {
    accessToken: string;
    createdAt: string;
    email: string;
    fashOrgCart: string;
    fashOrgOrders: any[]; // You can replace 'any' with a more specific type if needed
    fashOrgWishlist: any[]; // You can replace 'any' with a more specific type if needed
    isBlocked: boolean;
    isDeleted: boolean;
    isVerified: boolean;
    lastLogin: string;
    oauthProviders: any[]; // You can replace 'any' with a more specific type if needed
    profile: string;
    refreshToken: string;
    role: string;
    updatedAt: string;
    _id: string;
    message: string;
    status: string;
  }