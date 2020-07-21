const PushNote = async () => {
  var truepush = window.truepush || []
  truepush.push(function () {
    truepush.Init(
      {
        id: "5f113fe2175ac2180a6955df",
      },
      function (error) {
        if (error) console.error("truepush", error)
        else console.log("truepush connected")
      }
    )
  })
}

export default PushNote
