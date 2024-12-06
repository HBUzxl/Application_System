<template>
        <div class="form-container">
        <el-form :model="form" :rules="rules" ref="appointmentForm" label-width="100px">
          <el-form-item label="患者姓名" prop="patientName">
            <el-input v-model="form.patientName" placeholder="必填"></el-input>
          </el-form-item>
          
          <div class="form-row">
            <el-form-item label="性别" prop="gender" class="gender-item">
              <el-select v-model="form.gender" placeholder="男">
                <el-option label="男" value="male"></el-option>
                <el-option label="女" value="female"></el-option>
              </el-select>
            </el-form-item>
            
            <el-form-item label="年龄" prop="age" class="age-item">
              <el-input v-model="form.age" placeholder="岁"></el-input>
            </el-form-item>
          </div>
  
          <el-form-item label="预约时间" prop="appointmentTime">
            <el-input v-model="form.appointmentTime" placeholder="必填"></el-input>
          </el-form-item>
  
          <el-form-item label="手术部位" prop="surgeryLocation">
            <el-input v-model="form.surgeryLocation" placeholder="必填"></el-input>
          </el-form-item>
  
          <el-form-item label="临床医生">
            <el-input v-model="form.clinicalDoctor"></el-input>
          </el-form-item>
  
          <el-form-item label="联系电话">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
  
          <el-form-item label="送检医院">
            <el-input v-model="form.hospital"></el-input>
          </el-form-item>
  
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.remarks" :rows="4"></el-input>
          </el-form-item>
  
        </el-form>
      </div>
  </template>
  
  <script>
  export default {
    name: "AppointmentInfo",
    data() {
      return {
        form: {
          patientName: '',
          gender: '男',
          age: '',
          appointmentTime: '',
          surgeryLocation: '',
          clinicalDoctor: '',
          phone: '',
          hospital: '',
          remarks: ''
        },
        rules: {
          patientName: [
            { required: true, message: '请输入患者姓名', trigger: 'blur' }
          ],
          appointmentTime: [
            { required: true, message: '请输入预约时间', trigger: 'blur' }
          ],
          surgeryLocation: [
            { required: true, message: '请输入手术部位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs.appointmentForm.validate((valid) => {
          if (valid) {
            // TODO: Implement form submission logic
            console.log('Form submitted:', this.form)
          } else {
            return false
          }
        })
      },
      cancelForm() {
        this.$refs.appointmentForm.resetFields()
      }
    }
  }
  </script>
  
  <style scoped>

  
 

  
  .form-container {
    max-width: 800px;
  }
  
  .form-row {
    display: flex;
    gap: 20px;
  }
  
  .gender-item {
    width: 180px;
  }
  
  .age-item {
    width: 180px;
  }

  
  .el-button {
    min-width: 120px;
    margin: 0 10px;
  }
  
  .el-input {
    width: 100%;
  }
  </style>