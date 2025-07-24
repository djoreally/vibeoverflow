{pkgs}: {
  channel = "stable-24.11";
  packages = [
    pkgs.nodejs_20
    pkgs.zulu
    pkgs.openssl
  ];
  env = {
    PRISMA_CLI_QUERY_ENGINE_TYPE = "binary";
  };
  idx = {
    extensions = [
      # "vscodevim.vim"
    ];
    workspace = {
      onCreate = {
        default.openFiles = [
          "src/app/page.tsx"
        ];
      };
    };
  };
}
