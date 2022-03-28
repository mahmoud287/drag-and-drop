<template>
  <a-layout id="darg-and-drop">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1"> Drag And Drop </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['1']"
          :default-open-keys="['Showcase']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="Showcase">
            <span slot="title"><a-icon type="user" />Showcase</span>
            <a-menu-item key="1">
              <nuxt-link to="/"> Card board</nuxt-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: 'unset',
          }"
        >
          <Nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
#darg-and-drop {
  height: 100vh;
}
</style>
