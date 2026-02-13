$(document).ready(function() {
    var itemSubTotal = 0
    var calculateSubTotal = function(itemPrice, quantity) {
        itemSubTotal = parseFloat(itemPrice) * parseFloat(quantity)
        return itemSubTotal
    }

    var totalPrice = 0
    $('tbody tr').each(function() {
        let price = $(this).find('.itemPrice').text()
        let quantity = $(this).find('.quantity').val()
        let subtotal = calculateSubTotal(price, quantity)

        $(this).find('.itemSubTotal').text(subtotal)

        totalPrice += subtotal
    })
    $('.totalPrice').text('$' + totalPrice)

    

    $(document).on('click', '.remove', function() {
        $(this).closest('tr').remove()
    })


    $('.newItem').on('submit', function(event) {
        var name = $(this).children('[name=item]').val()
        var price = $(this).children('[name=price]').val()
        var quantity = $(this).children('[name=quantity]').val()
        event.preventDefault()

        calculateSubTotal(price, quantity)

        $('tbody').append('<tr>' +
          '<th scope="row">' + name + '</th>' +
          '<td class="itemPrice">' + price + '</td>' +
          '<td><input type="number" class="quantity" value="' + quantity + '"min="0"></td>' + 
          '<td class="itemSubTotal">' + itemSubTotal + '</td>' +
          '<td><button class="btn btn-light btn-sm remove">cancel</button></td>' +
        '</tr>')
    })

    $('#calculatePrice').on('click', function() {
        totalPrice = 0
        $('tbody tr').each(function() {
            let price = $(this).find('.itemPrice').text()
            let quantity = $(this).find('.quantity').val()
            let subtotal = calculateSubTotal(price, quantity)

            $(this).find('.itemSubTotal').text(subtotal)

            totalPrice += subtotal            
        })        
        $('.totalPrice').text('$' + totalPrice)
    })

})


