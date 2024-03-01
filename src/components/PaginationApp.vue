<template>
    <div class="container">
      <div>
        Page No <strong>{{ this.currenIndex }}</strong>
        Row Size <strong>{{ this.pageSize }}</strong>
      </div>
      <div>
        <table>
          <tr>
            <th>Username</th>
            <th>Age</th>
            <th>Pass</th>
          </tr>
        
        <template v-for="x in filterData">
            <tr :key="x.userName">
              <td>{{ x.userName }}</td>
              <td>{{ x.age }}</td>
              <td>{{ x.password }}</td>
            </tr>
        </template>
        </table>
      </div>
      <div>
        <button @click="handlePage('prev')"> Prev</button>
        <button @click="handlePage('next')"> Next</button>
      </div>
  
    </div>
  </template>
  <script>
  export default {
    data: function () {
      return {
        data: data,
        filterData: [],
        currenIndex: 1,
        pageSize: 4
      }
    },
    methods:{
      handlePage(type) {
        if(type) {
          this.checkBounds(type);
        }
        let maxIndex = this.currenIndex * this.pageSize;
        let minIndex = maxIndex - this.pageSize;
        this.filterData = data.filter((item, ind) => {
          return ind >= minIndex && ind < maxIndex
        })
      },
  
      checkBounds(type) {
        let len = this.data.length;
        let size = this.currenIndex * this.pageSize;
        let dif = len-size;
        if(type == 'next') {
            if(!dif && dif != 0) {
              this.currenIndex--;
            } else {      
              if(dif > 0) {
                this.currenIndex++
              }
            }
        } else {
          if(this.currenIndex - 1 === 0) {
            this.currenIndex = 1;
            return;
          }
          this.currenIndex--
        }
      }
    },
    mounted() {
      this.handlePage()
    }
  
  }
  
  const data = [
  {
    "userName": "user1",
    "age": 25,
    "password": "password1",
    "email": "user1@example.com"
  },
  {
    "userName": "user2",
    "age": 30,
    "password": "password2",
    "email": "user2@example.com"
  },
  {
    "userName": "user3",
    "age": 28,
    "password": "password3",
    "email": "user3@example.com"
  },
  {
    "userName": "user4",
    "age": 32,
    "password": "password4",
    "email": "user4@example.com"
  },
  {
    "userName": "user5",
    "age": 27,
    "password": "password5",
    "email": "user5@example.com"
  },
  {
    "userName": "user6",
    "age": 35,
    "password": "password6",
    "email": "user6@example.com"
  },
  {
    "userName": "user7",
    "age": 22,
    "password": "password7",
    "email": "user7@example.com"
  },
  {
    "userName": "user8",
    "age": 29,
    "password": "password8",
    "email": "user8@example.com"
  },
  {
    "userName": "user9",
    "age": 31,
    "password": "password9",
    "email": "user9@example.com"
  },
  {
    "userName": "user10",
    "age": 26,
    "password": "password10",
    "email": "user10@example.com"
  },
  {
    "userName": "user11",
    "age": 33,
    "password": "password11",
    "email": "user11@example.com"
  },
  {
    "userName": "user12",
    "age": 24,
    "password": "password12",
    "email": "user12@example.com"
  },
  {
    "userName": "user13",
    "age": 34,
    "password": "password13",
    "email": "user13@example.com"
  },
  {
    "userName": "user14",
    "age": 23,
    "password": "password14",
    "email": "user14@example.com"
  },
  {
    "userName": "user15",
    "age": 27,
    "password": "password15",
    "email": "user15@example.com"
  },
  {
    "userName": "user16",
    "age": 36,
    "password": "password16",
    "email": "user16@example.com"
  },
  {
    "userName": "user17",
    "age": 28,
    "password": "password17",
    "email": "user17@example.com"
  },
  {
    "userName": "user18",
    "age": 29,
    "password": "password18",
    "email": "user18@example.com"
  },
  {
    "userName": "user19",
    "age": 25,
    "password": "password19",
    "email": "user19@example.com"
  },
  {
    "userName": "user20",
    "age": 31,
    "password": "password20",
    "email": "user20@example.com"
  },
  {
    "userName": "user21",
    "age": 26,
    "password": "password21",
    "email": "user21@example.com"
  },
  {
    "userName": "user22",
    "age": 30,
    "password": "password22",
    "email": "user22@example.com"
  },
  {
    "userName": "user23",
    "age": 32,
    "password": "password23",
    "email": "user23@example.com"
  },
  {
    "userName": "user24",
    "age": 27,
    "password": "password24",
    "email": "user24@example.com"
  },
  {
    "userName": "user25",
    "age": 28,
    "password": "password25",
    "email": "user25@example.com"
  }
  ]
  
  </script>
  <style scoped>
  table, th, td {
    border: 1px solid;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  div {
    margin: 8px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  button {
    margin-right: 15px;
  }
  </style>