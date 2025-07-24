{pkgs}: {
  channel = "stable-24.11";
  packages = [
    pkgs.nodejs_20
    pkgs.zulu
    pkgs.openssl
  ];
  env = {};
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
    previews = {
      enable = true;
      previews = [
        {
          command = "npm run dev";
          port = 9002;
          label = "web";
        }
      ];
    };
  };
}
