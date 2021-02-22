<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        {{ $t('pageTitle') }}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/products">
            {{ $t ('products') }}
          </b-nav-item>
          <b-nav-item href="/categories">
            {{ $t('categories') }}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('search')" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              {{ $t('search') }}
            </b-button>
          </b-nav-form>

          <b-nav-item-dropdown :text="$t('lang')" right>
            <b-dropdown-item
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ $t('user') }}</em>
            </template>
            <b-dropdown-item href="#">
              Profile
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  }
}
</script>
