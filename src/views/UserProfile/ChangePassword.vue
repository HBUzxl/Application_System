<template>
    <div class="change-password">
      <el-card class="password-card">
        <template #header>
          <div class="card-header">
            <h2>修改密码</h2>
          </div>
        </template>
        
        <el-form :model="formData" :rules="rules" ref="formRef" label-width="100px">
          <el-form-item label="用户名">
            <el-input v-model="username" disabled />
          </el-form-item>
          
          <el-form-item label="旧密码" prop="oldPassword">
            <el-input 
              v-model="formData.oldPassword" 
              type="password" 
              show-password
              placeholder="请输入旧密码" 
            />
          </el-form-item>
          
          <el-form-item label="新密码" prop="newPassword">
            <el-input 
              v-model="formData.newPassword" 
              type="password" 
              show-password
              placeholder="请输入新密码" 
            />
          </el-form-item>
          
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input 
              v-model="formData.confirmPassword" 
              type="password" 
              show-password
              placeholder="请确认新密码" 
            />
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">修改</el-button>
            <el-button @click="handleReset">清空</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  
  const username = ref('当前用户名') // 这里替换为实际的用户名
  const formRef = ref(null)
  
  const formData = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  
  const rules = {
    oldPassword: [
      { required: true, message: '请输入旧密码', trigger: 'blur' }
    ],
    newPassword: [
      { required: true, message: '请输入新密码', trigger: 'blur' },
      { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
    ],
    confirmPassword: [
      { required: true, message: '请确认新密码', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          if (value !== formData.newPassword) {
            callback(new Error('两次输入的密码不一致'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  }
  
  const handleSubmit = async () => {
    if (!formRef.value) return
    
    try {
      await formRef.value.validate()
      // 这里添加修改密码的API调用
      ElMessage.success('密码修改成功')
    } catch (error) {
      console.error(error)
    }
  }
  
  const handleReset = () => {
    if (formRef.value) {
      formRef.value.resetFields()
    }
  }
  </script>
  
  <style scoped>
  .change-password {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  
  .password-card {
    width: 500px;
  }
  
  .card-header {
    text-align: center;
  }
  </style>