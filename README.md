# 🚀 Denincore - Website Moderno e Sofisticado

Um website extremamente moderno, ousado e sofisticado para a empresa Denincore, especializada na criação e venda de sites e sistemas web.

## ✨ Características

- **Design Minimalista e Impactante**: Fundo preto profundo com destaques em laranja intenso
- **Animações Suaves**: Transições e efeitos usando Framer Motion
- **Responsivo**: Otimizado para todos os dispositivos
- **Performance**: Construído com Next.js 14 e Tailwind CSS
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🎨 Paleta de Cores

- **Fundo Principal**: Preto profundo (#000000)
- **Destaque**: Laranja intenso (#FF6600)
- **Separação**: Cinza chumbo (#1A1A1A)
- **Texto**: Branco (#FFFFFF)

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **PostCSS** - Processador CSS

## 📱 Seções do Website

1. **Header Fixo** - Logo e navegação com efeitos hover
2. **Hero Section** - Tela cheia com título impactante e CTA
3. **Serviços** - Cards com ícones animados
4. **Por que Escolher** - Layout dividido com imagem tech
5. **Portfólio** - Grid animado com glassmorphism
6. **CTA Final** - Gradiente preto-laranja vibrante
7. **Footer** - Links rápidos e redes sociais

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]
cd denincore

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Constrói para produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
```

## 📁 Estrutura do Projeto

```
denincore/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais e Tailwind
│   │   ├── layout.tsx       # Layout raiz
│   │   └── page.tsx         # Página principal
│   └── components/
│       ├── Header.tsx       # Cabeçalho fixo
│       ├── Hero.tsx         # Seção hero
│       ├── Services.tsx     # Serviços oferecidos
│       ├── WhyChoose.tsx    # Diferenciais da empresa
│       ├── Portfolio.tsx    # Portfólio de projetos
│       ├── CTA.tsx          # Call-to-action
│       └── Footer.tsx       # Rodapé
├── public/                  # Arquivos estáticos
├── tailwind.config.js       # Configuração do Tailwind
├── next.config.js           # Configuração do Next.js
└── package.json             # Dependências do projeto
```

## 🎭 Animações e Efeitos

- **Fade-in**: Elementos aparecem suavemente ao rolar
- **Parallax**: Efeito de profundidade sutil
- **Hover Effects**: Microinterações nos elementos
- **Scroll Animations**: Animações baseadas no scroll
- **Glassmorphism**: Efeito de vidro fosco

## 🔧 Personalização

### Cores
Edite as cores no arquivo `tailwind.config.js`:
```javascript
colors: {
  'denincore-black': '#000000',
  'denincore-orange': '#FF6600',
  'denincore-gray': '#1A1A1A',
  'denincore-white': '#FFFFFF',
}
```

### Fontes
As fontes Poppins e Montserrat são importadas via Google Fonts no `globals.css`.

### Animações
Personalize as animações no `tailwind.config.js` na seção `keyframes`.

## 📱 Responsividade

O website é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Conecte seu repositório ao Vercel
```

### Outras Plataformas
O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**Denincore** - contato@denincore.com

Link do Projeto: [https://github.com/seu-usuario/denincore](https://github.com/seu-usuario/denincore)

---

⭐ Se este projeto te ajudou, considere dar uma estrela! 