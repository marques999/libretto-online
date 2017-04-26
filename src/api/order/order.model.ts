/**
 * @export
 * @type Order
 */
export type Order = {
  id: string,
  book: string,
  total: number,
  customer: string,
  quantity: number,
  status: string,
  timestamp: Date,
  lastUpdate: Date
};

/**
 * @export
 * @type OrderForm
 */
export type OrderForm = {
  id: string,
  bookId: string,
  quantity: number,
  customerId: string
};
