import "../sass/theme.scss";

// Load ProductDiv if in development
if (import.meta.env.DEV) {
  const ProductDiv = (await import("productdiv")).default;
  const BootstrapConfiguration = (await import("productdiv-config-bootstrap5"))
    .BootstrapConfiguration;
  ProductDiv(BootstrapConfiguration);
}
