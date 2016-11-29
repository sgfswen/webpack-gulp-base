const toFixed = fee => {
  if (typeof fee === 'number' && fee > 1) {
    return (fee / 100).toFixed(2);
  }

  return 0.01;
};

export default {
  toFixed
};