

function print(props){
    return (
    <>
   <div class="max-w-sm rounded-xl shadow-lg p-6 bg-white mb-6">
    <h2 class="text-xl font-bold text-yellow-500 ">{props.username}</h2>
    <p class="text-gray-600 mt-2 bg-yellow-500 mb-4">
        This is a Tailwind card.
    </p>
    <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Read More
    </button>
</div>
    </>
  )
}


export default print;