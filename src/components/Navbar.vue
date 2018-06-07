<template>
    <b-navbar sticky toggleable="md" type="dark" variant="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/">Urbanatomy</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav class="ml-auto">
      <b-nav-item exact to="/">Home</b-nav-item>
      <b-nav-item exact to="/urbex">Urbex</b-nav-item>
      <b-nav-item exact to="/contact">Contact</b-nav-item>
    </b-navbar-nav>


  </b-collapse>
</b-navbar>

</template>

<style>
.nav-link.active {
  border-bottom: 5px solid white;
}
</style>
