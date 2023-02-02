//? Libraries
import { Component } from 'react'
import { utilService } from '../../../services/util.service'

export class AnimalList extends Component {
  animalInfos = [
    { id: utilService.makeId(), type: 'Malayan Tiger', count: 787 },
    { id: utilService.makeId(), type: 'Mountain Gorilla', count: 212 },
    { id: utilService.makeId(), type: 'Fin Whale', count: 28 },
  ]

  componentDidMount() {
    console.log('Animal List - Loaded !')
  }

  //? Private Components
  AnimalPreview() {
    return this.animalInfos.map((animal, idx) => {
      const { id, type, count } = animal
      return (
        <tr key={id + idx} className="animals-table-body-animal">
          <td className="animals-table-body-animal-type">{type}</td>
          <td className="animals-table-body-animal-count">{count}</td>
          <td className="animals-table-body-animal-search-btn">
            <a
              href={`https://www.google.com/search?q=${type}`}
              target="_blank"
              rel="noopener noreferrer"
              title={`Search ${type} on Google`}
            >
              Search
            </a>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <table className="animals-table">
        <thead className="animals-table-head">
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="animals-table-body">{this.AnimalPreview()}</tbody>
      </table>
    )
  }
}
