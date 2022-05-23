const formatPrice = (price: number) => {
  return price.toLocaleString('pt-Br', { style: 'currency', currency: 'BRL' });
};

const formatDate = (date: string) => {
  const formattedDate = new Date(date);

  return formattedDate.toLocaleString('pt-Br', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });
};

export { formatPrice, formatDate };
