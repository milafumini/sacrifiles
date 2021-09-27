if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function() 
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$.get("../data/literature/lt_0_general.csv", function (CSVdata) {
    var options = { "separator": ";" };
    data = $.csv.toObjects(CSVdata, options);
    const App = new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        data() {
            dataHeaderNoSpace = []
            $.each(data, function(_, row){
                rowHeaderNoSpace = {}
                $.each(row, function(header, value){
                    headerNoSpace = header.trim().split(' ').join('_').toLowerCase()
                    rowHeaderNoSpace[headerNoSpace] = value
                });
                dataHeaderNoSpace.push(rowHeaderNoSpace)
            });
            return {
                data: dataHeaderNoSpace, 
                showTable: true, 
                showDetails:false
            }
        }, 
        computed: {
            headers(){
                headers = [{ text: "", value: "controls", sortable: false}]
                $.each(this.data[0], function(header, _){
                    if (header == "item_title"){
                        headers.push({"text": header.split('_').join(' ').toUpperCase(), "value": header, "width": "15rem"})
                    } else {
                        headers.push({"text": header.split('_').join(' ').toUpperCase(), "value": header})
                    }
                });
                return headers
            }
        },
        methods: {
            showMore(items){
                this.showTable = false
                this.showDetails = true
                itemsHeadersWithSpace = {}
                $.each(items, function(header, value){
                    header = header.split('_').join(' ').capitalize()
                    itemsHeadersWithSpace[header] = value
                });                
                return this.items = itemsHeadersWithSpace
            },
            backToTable(){
                this.showTable = true
                this.showDetails = false
            }
        }
    })
});
