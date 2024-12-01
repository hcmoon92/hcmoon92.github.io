# idx.google.com

---
# Customization

```yaml
  packages = [
    pkgs.jdk17
    pkgs.unzip
    pkgs.docker
  ];
  # Sets environment variables in the workspace
  env = {};
  services.docker.enable = true;
```

---
# Refs
- https://developers.google.com/idx/guides/customize-idx-env?hl=ko