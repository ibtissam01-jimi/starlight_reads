import React, { useState } from "react";
import { Card, Avatar, List, Typography, Row, Col, Divider, Form, Input, Button, message } from "antd";
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, CalendarOutlined, UserOutlined, SettingOutlined, BarChartOutlined, EditOutlined } from "@ant-design/icons";
import "../../styles/profileAdmin.css";



const { Title, Text } = Typography;

const AdminProfile = () => {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  if (!user) {
    return <div>No user data found. Please sign in again.</div>;
  }

  
  const getProfileImage = (email) => {
    switch (email) {
      case "aya@example.com":
        return "/images/aya-profile.jpg";  
      case "ibtissam@example.com":
        return "/images/ibtissam-profile.jpg"; 
      default:
        return "/images/default-profile.jpg";  
    }
  };

  
  const recentActivities = [
    "Reviewed user reports",
    "Updated site settings",
    "Responded to user feedback",
    "Managed user accounts"
  ];

  
  const userStatistics = {
    totalUsers: 1200,
    activeUsers: 1100,
    newUsers: 50,
  };

  const handleEdit = () => {
    setIsEditing(true);
    form.setFieldsValue(user);
  };

  const handleSave = (values) => {
    localStorage.setItem("user", JSON.stringify(values));
    message.success("Profile updated successfully!");
    setIsEditing(false);
  };

  return (
    <div className="admin-profile">
      
      <Card
        style={{
          width: 800,
          margin: "50px auto",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Row gutter={16}>
          <Col span={8} style={{ textAlign: 'center' }}>
            <Avatar
              size={120}
              src={getProfileImage(user.email)} 
              style={{ backgroundColor: "#036280", marginBottom: 20 }}
            />
            <Title level={2}>{user.name}</Title>
            <Text type="secondary">{user.role}</Text>
          </Col>
          <Col span={16}>
            <div className="profile-details">
              <p>
                <MailOutlined style={{ color: "#036280" }} /> {user.email}
              </p>
              <p>
                <PhoneOutlined style={{ color: "#036280" }} /> {user.phone}
              </p>
              <p>
                <EnvironmentOutlined style={{ color: "#036280" }} /> {user.address}
              </p>
              <p>
                <CalendarOutlined style={{ color: "#036280" }} /> Joined: {user.joinDate}
              </p>
              <Button type="primary" icon={<EditOutlined />} onClick={handleEdit}>
                Edit Profile
              </Button>
            </div>
          </Col>
        </Row>
        {isEditing && (
          <Form form={form} layout="vertical" onFinish={handleSave} style={{ marginTop: 20 }}>
            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Please enter your address' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="joinDate" label="Join Date" rules={[{ required: true, message: 'Please enter your join date' }]}>
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        )}
        <Divider />
        <div className="profile-activities">
          <Title level={4}><SettingOutlined /> Recent Activities</Title>
          <List
            dataSource={recentActivities}
            renderItem={item => (
              <List.Item>
                <UserOutlined style={{ color: "#036280" }} /> {item}
              </List.Item>
            )}
          />
        </div>
        <Divider />
        <div className="profile-statistics">
          <Title level={4}><BarChartOutlined /> User Statistics</Title>
          <p>Total Users: {userStatistics.totalUsers}</p>
          <p>Active Users: {userStatistics.activeUsers}</p>
          <p>New Users: {userStatistics.newUsers}</p>
        </div>
      </Card>
      
    </div>
  );
};

export default AdminProfile;