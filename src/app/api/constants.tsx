import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GradingIcon from '@mui/icons-material/Grading';

export const AdminNavs = [
  {label:'Dashboard', route:'/admin', icon:<DashboardIcon/>},
  {label:'Class List', route:'/admin/class', icon:<DashboardIcon/>},
  {label:'Student Ledger', route:'/admin/students', icon:<DashboardIcon/>},
  {label:'Teachers', route:'/admin/teachers', icon:<GradingIcon/>},
  {label:'Subject List', route:'/admin/subjects', icon:<GradingIcon/>},
];
export const ParentNavs = [
  {label:'Dashboard', route:'/dashboard', icon:<DashboardIcon/>},
  {label:'Check Result', route:'/dashboard/studentresult', icon:<GradingIcon/>},
];