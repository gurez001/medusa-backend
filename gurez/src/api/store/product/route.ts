import type {
    MedusaRequest,
    MedusaResponse,
  } from "@medusajs/medusa"
  
  export const GET = (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const data = {
        products: [
          { id: 1, name: 'Product 1' },
          { id: 2, name: 'Product 2' },
        ],
      };
      res.json(data);
  }