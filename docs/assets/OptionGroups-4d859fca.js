const e=`<template>
  <div><label class="typo__label">Groups</label>
    <multiselect id="option-groups" v-model="value" :options="options" :multiple="true" group-values="libs" group-label="language"
                 :group-select="true" placeholder="Type to search" track-by="name" label="name"><template v-slot:noResult>Oops! No elements found. Consider changing the search query.</template>
    </multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      options: [
        {
          language: 'Javascript',
          libs: [
            {name: 'Vue.js', category: 'Front-end'},
            {name: 'Adonis', category: 'Backend'}
          ]
        },
        {
          language: 'Ruby',
          libs: [
            {name: 'Rails', category: 'Backend'},
            {name: 'Sinatra', category: 'Backend'}
          ]
        },
        {
          language: 'Other',
          libs: [
            {name: 'Laravel', category: 'Backend'},
            {name: 'Phoenix', category: 'Backend'}
          ]
        }
      ],
      value: []
    }
  }
}
<\/script>
`;export{e as default};
