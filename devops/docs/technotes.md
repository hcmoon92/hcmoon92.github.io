## idx - docker enable

```yaml
# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.service-wrapper
    pkgs.go
    pkgs.air
    pkgs.docker
  ];
  # Sets environment variables in the workspace
  services.docker.enable = true;
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "golang.go"
      "rangav.vscode-thunder-client"
      "ms-azuretools.vscode-docker"
    ];
    workspace = {
      onCreate = {
        # Open editors for the following files by default, if they exist:
        default.openFiles = ["main.go"];
      };
      # Runs when a workspace is (re)started
      onStart= {
        run-server = "air";
      };
      # To run something each time the workspace is first created, use the `onStart` hook
    };
  };
}
```