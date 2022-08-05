import React from 'react'

const Loading = () => {
  return (
    <div class="flex justify-center items-center my-52">
  <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <div class="border-4 m-2 p-1 border-blue-600 rounded-full"></div>
  </div>
  Loading...
</div>
  )
}

export default Loading