export const routes = [
    {
        path: "/home",
        name: "Accueil"
    },
    {
        path: "/about-us",
        name: "Qui sommes-nous ?"
    },
    {
        path: "/services/matiere",
        name: "Nos Services",
        subRoutes: [
            {
                path: "/services/matiere",
                name: "NÉGOCE DES MATIÈRES PREMIÈRES ..."
            },
            {
                path: "/services/intrant",
                name: "INTRANTS ET MÉCANISATION ..."
            },
        ]
    },
    {
        path: "/products",
        name: "Nos Produits"
    },
    {
        path: "/contact",
        name: "Contact"
    },
]
export const footerRoutes = [
    {
        target: null,
        path: "/mentions-legales",
        name: "Mentions légales"
    },
    {
        target: null,
        path: "/politique-de-cookie",
        name: "Politique de Cookies"
    },
    {
        target: null,
        path: "/politique-de-confidentialite",
        name: "Politique de confidentialité"
    },
]