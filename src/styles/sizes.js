const method = {
  up() {},
  down(size) {
    const sizes = {
      xxs: "374px",
      xs: "576px",
      sm: "700px",
      md: "992px",
      lg: "1400px",
      xl: "2400px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};
export default method;
