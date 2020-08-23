$(() => {
  
    $('#milhas').keyup(() => {
      const milhas = parseFloat($('#milhas').val())
      const resultadoKm = milhas * 1.60934

      $('#km').val(resultadoKm.toLocaleString('pt-br', {minimumFractionDigits: 4}))

      if (!$('#milhas').val() || $('#km').val() === 'NaN')
        $('#km').val('')
    })

    $('#km').keyup(() => {
      const km = parseFloat($('#km').val())
      const resultadoMilhas = km / 1.60934

      $('#milhas').val(resultadoMilhas.toLocaleString('pt-br', {minimumFractionDigits: 4}))

      if (!$('#km').val() || $('#milhas').val() === 'NaN')
        $('#milhas').val('')
    })

  })