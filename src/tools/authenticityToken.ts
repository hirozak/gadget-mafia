const authenticityToken = () => {
  const token: HTMLMetaElement | null = document.querySelector(
    'meta[name="csrf-token"]'
  );
  return token ? token.content : '';
};

export default authenticityToken;
