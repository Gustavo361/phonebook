<template>
    <header>
        <nav>
            <ul>
                <li><router-link to="/"><ion-icon name="home-outline"></ion-icon></router-link></li>
                <li><router-link to="/create"><ion-icon name="add-circle-outline"></ion-icon></router-link>
                </li>
                <li>
                    <a href="https://github.com/Gustavo361/phonebook" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style scoped>
header {
    padding: 1%;
    border-radius: 12px;
    display: block;
    place-items: center;
    background-color: #171723;
    max-width: 600px;
    margin: 0 auto;
}

ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

ul li:nth-child(2) {}

ul:hover {
    text-decoration: none;
    color: #008b8b;
}

li a {
    margin-left: 10px;
}

li a,
li ion-icon[name="add-circle-outline"],
li ion-icon[name="home-outline"] {
    font-size: 22px;
    text-decoration: none;
}

li a:hover {
    color: #008b8b
}
</style>