# Publicar este portfólio no GitHub Pages

Passos rápidos:

1. Crie um repositório no GitHub (ou use um existente).
2. No seu projeto local (esta pasta), rode:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<seu-repo>.git
git push -u origin main
```

3. O workflow `/.github/workflows/deploy.yml` dispara ao dar push para a branch `main` e publica o conteúdo para o GitHub Pages automaticamente.

4. Após o Action finalizar, seu site ficará disponível em:

- `https://<seu-usuario>.github.io/<seu-repo>/` (repos padrão)
- ou `https://<seu-usuario>.github.io/` caso o repositório se chame `<seu-usuario>.github.io`.

Observações:
- Se usar outra branch que não `main`, atualize o arquivo do workflow ou mude a branch local para `main`.
- Verifique a aba "Actions" no GitHub para acompanhar o deploy.
