---
title: "About the Website"
date: 0000-05-01T20:49:00-05:00
draft: false
summary: This is an overview of how the website was created
---

## About the website

* I will list all the tools I used to create the website and how to install those tools
* for example
* I'm running linux-mint and windows 11
* I also use the nix package manager and vs code
```bash
sh <(curl -L https://nixos.org/nix/install) --daemon

nix-env -iA nixpkgs.vscode

```
* I will describe briefly how the website is made

### CSS
```css
* {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

html {
    scroll-behavior: smooth;
}

header {
    position: sticky;
    top: 0;
    z-index: 1;
}
```

### html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    {{ partial "head.html"}}
    <title>
        {{.Title}}
    </title>
</head>
<body>
    <header>
        {{ partial "nav-bar.html" }}
    </header>
    
    <main>
        {{ block "main" .}}{{- end }}
    </main>
    

    <footer id="contact">
        {{ partial "footer.html" }}
    </footer>
    {{ $jscript := resources.Get "script.js" | minify | fingerprint }}
    <script src="{{ $jscript.Permalink }}"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>
```

