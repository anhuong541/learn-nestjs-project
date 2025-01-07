export function responseSuccess(
  data: any = null,
  message: string = 'Success',
  statusCode: number = 200,
) {
  return {
    statusCode,
    message,
    data,
  };
}
