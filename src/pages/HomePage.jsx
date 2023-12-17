import React from 'react'
import SearchBar from '../components/SearchBar'
import NoteList from '../components/NoteList'
import { IoAddOutline } from "react-icons/io5";

const HomePage = () => {
  return (
    <section>
      <h2>Catatan Aktif</h2>
      <SearchBar />
      <NoteList />
      <div className='homepage__action'>
        <button className='action' type='button' title='Tambah Catatan'>
          <IoAddOutline />
        </button>
      </div>
    </section>
  )
}

export default HomePage