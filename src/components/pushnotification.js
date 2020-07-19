const PushNote = () => {
  var truepush = window.truepush || []
  truepush.push(function () {
    truepush.Init(
      {
        id: "5f113fe2175ac2180a6955df",
      },
      function (error) {
        if (error) console.error(error)
      }
    )
  })
}

export default PushNote
