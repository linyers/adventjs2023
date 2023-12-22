function calculateTime(deliveries: string[]): string {
  const DEFAULT_DATE = "2003-04-06T";
  const today = new Date(DEFAULT_DATE + "00:00:00");
  const milliseconds = deliveries
    .map((delivery) => {
      return new Date(DEFAULT_DATE + delivery).getTime() - today.getTime();
    })
    .reduce((a, b) => a + b);

  today.setMilliseconds(milliseconds);
  const difference =
    new Date(DEFAULT_DATE + "07:00:00").getTime() - today.getTime();
  const result = `${difference > 0 ? "-" : ""}${new Date(Math.abs(difference))
    .toISOString()
    .slice(11, 19)}`;
  return result;
}
