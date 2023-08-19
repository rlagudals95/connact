export const isCollectableUrl = (url: string): boolean => {
  const regex = /(taobao|tmall|1688|aliexpress)/;
  return regex.test(url);
};
