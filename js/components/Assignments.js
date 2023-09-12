import AssignmentList from './AssignmentList.js';

export default {
  components: { AssignmentList },
  template: /* html */ `
    <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="En cours"></assignment-list>
      <assignment-list :assignments="filters.completed" title="Terminés"></assignment-list>
    </section>
  `,
  data()  {
    return {
      assignments: [
        {name: 'Exercice de Maths', complete: false, id: 1},
        {name: 'Exercice de Français', complete: false, id: 2},
        {name: 'Lecture Chapitre 2', complete: false, id: 3},
      ],
    }
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(assignment => !assignment.complete),
        completed: this.assignments.filter(assignment => assignment.complete),
      }
    },
  },
}