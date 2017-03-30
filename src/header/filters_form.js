import React, {Component} from 'react'
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'
import SelectProjects from './select_projects'
import SelectTrackers from './select_trackers'

class FiltersForm extends Component {

  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.updateTextFilter = this.updateTextFilter.bind(this);
  }

  applyFilters(e){
    e.preventDefault();
    this.props.applyFiltersChanges();
    this.props.onSubmit();
  }

  resetFilters(e){
    e.preventDefault();
    this.props.updateSelectedFilters({});
  }

  updateTextFilter(e, {value}){
    this.props.updateSelectedFilters({text: value});
  }

  render() {
    return (
      <Form className='filters_form'>
        <Form.Field inline>
          <label>Projets</label>
          <SelectProjects selected_filters={this.props.selected_filters} updateSelectedFilters={this.props.updateSelectedFilters} />
        </Form.Field>
        <Form.Field inline>
          <label>Trackers</label>
          <SelectTrackers selected_filters={this.props.selected_filters} updateSelectedFilters={this.props.updateSelectedFilters} />
        </Form.Field>
        <Form.Input label='Contient' placeholder='contenu recherché' value={this.props.selected_filters.text} onChange={this.updateTextFilter} />
        <Button type='submit' {...this.props.dirty_filters ? {color:'blue'} : {color:'grey'}} name="apply_filters" onClick={this.applyFilters}>Appliquer</Button>
        <Button name="reset_filters" onClick={this.resetFilters}>Effacer</Button>
      </Form>
    )
  }
}

export default FiltersForm