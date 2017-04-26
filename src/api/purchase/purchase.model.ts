/**
 * @export
 * @type Purchase
 */
export type Purchase = {
  id: string,
  book: string,
  total: number,
  customer: string,
  quantity: number,
  timestamp: Date
};

/**
 * @export
 * @type PurchaseForm
 */
export type PurchaseForm = {
  id: string,
  bookId: string,
  quantity: number,
  customerId: string
};
