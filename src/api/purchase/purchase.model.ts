/**
 * @export
 * @type Purchase
 */
export type Purchase = {
  id: string;
  book: string;
  total: number;
  quantity: number;
  timestamp: Date;
  customer: string;
};

/**
 * @export
 * @type PurchaseForm
 */
export type PurchaseForm = {
  id: string;
  bookId: string;
  quantity: number;
  customerId: string;
};
