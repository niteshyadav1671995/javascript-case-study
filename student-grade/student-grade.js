function School() {
    this.students = {};
    this.roster = function () {
        var _keys = Object.keys(this.students);
        if (_keys.length > 0) {
            _keys.forEach(function(key) {
                this.students[key].sort();
            }, this);
        }  
        return this.students ;
    }
    this.add = function(studentName, grade) {
        if(this.students[grade]){
            this.students[grade].push(studentName);
        }else{
            this.students[grade]=[studentName];
        }

    }
    this.grade =function(grade) {
        if(this.students[grade]==undefined){
            this.students[grade]=[];
        }
        return this.students[grade];
    }
}

module.exports = School;