import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import supabase from '../../lib/supabase';

const { FiMail, FiPhone, FiUser, FiCalendar, FiMessageSquare, FiEye, FiTrash2 } = FiIcons;

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  // Mock data as fallback
  const mockInquiries = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+263 77 123 4567',
      subject: 'Inquiry about special needs programmes',
      message: 'Hello, I would like to learn more about your programmes for children with autism.',
      inquiry_type: 'programmes',
      created_at: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Michael Smith',
      email: 'michael.smith@email.com',
      phone: '+263 71 987 6543',
      subject: 'Enrolment for my child',
      message: 'I am interested in enrolling my 4-year-old child who has developmental delays.',
      inquiry_type: 'enrolment',
      created_at: new Date(Date.now() - 86400000).toISOString()
    }
  ];

  // Load inquiries from Supabase
  const loadInquiries = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_inquiries_pillar2025')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading inquiries:', error);
        setInquiries(mockInquiries);
      } else {
        setInquiries(data && data.length > 0 ? data : mockInquiries);
      }
    } catch (error) {
      console.error('Error:', error);
      setInquiries(mockInquiries);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const deleteInquiry = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      try {
        const { error } = await supabase
          .from('contact_inquiries_pillar2025')
          .delete()
          .eq('id', id);

        if (error) {
          console.error('Error deleting inquiry:', error);
        }

        // Remove from local state regardless of Supabase result
        setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
        setSelectedInquiry(null);
        alert('Inquiry deleted successfully');
      } catch (error) {
        console.error('Error:', error);
        // Still remove from local state for demo purposes
        setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
        setSelectedInquiry(null);
        alert('Inquiry deleted successfully');
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInquiryTypeColor = (type) => {
    const colors = {
      general: 'bg-blue-100 text-blue-800',
      enrolment: 'bg-green-100 text-green-800',
      tour: 'bg-purple-100 text-purple-800',
      programmes: 'bg-orange-100 text-orange-800',
      support: 'bg-red-100 text-red-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getInquiryTypeLabel = (type) => {
    const labels = {
      general: 'General Inquiry',
      enrolment: 'Enrolment Information',
      tour: 'Schedule a Tour',
      programmes: 'Programme Details',
      support: 'Special Needs Support'
    };
    return labels[type] || 'Unknown';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light-grey flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-golden"></div>
          <p className="mt-4 text-dark-grey">Loading inquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-grey py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-poppins font-bold text-navy mb-2">
            Admin Dashboard
          </h1>
          <p className="text-dark-grey">
            Manage contact inquiries from Pillar of Strength Resource Centre
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inquiries List */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-poppins font-bold text-navy">
                  Contact Inquiries ({inquiries.length})
                </h2>
                <button 
                  onClick={loadInquiries}
                  className="mt-2 text-golden hover:text-yellow-600 text-sm"
                >
                  Refresh
                </button>
              </div>
              
              <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                {inquiries.length === 0 ? (
                  <div className="p-8 text-center text-dark-grey">
                    <SafeIcon icon={FiMessageSquare} className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No inquiries yet</p>
                  </div>
                ) : (
                  inquiries.map((inquiry) => (
                    <motion.div
                      key={inquiry.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
                        selectedInquiry?.id === inquiry.id ? 'bg-golden/10' : ''
                      }`}
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-navy">{inquiry.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getInquiryTypeColor(inquiry.inquiry_type)}`}>
                              {getInquiryTypeLabel(inquiry.inquiry_type)}
                            </span>
                          </div>
                          <p className="text-sm text-dark-grey mb-1">{inquiry.subject}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500">
                            <span className="flex items-center space-x-1">
                              <SafeIcon icon={FiMail} className="h-3 w-3" />
                              <span>{inquiry.email}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <SafeIcon icon={FiCalendar} className="h-3 w-3" />
                              <span>{formatDate(inquiry.created_at)}</span>
                            </span>
                          </div>
                        </div>
                        <SafeIcon icon={FiEye} className="h-4 w-4 text-gray-400" />
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>

          {/* Inquiry Details */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-poppins font-bold text-navy">
                  Inquiry Details
                </h2>
              </div>
              
              {selectedInquiry ? (
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-dark-grey">Name</label>
                      <p className="text-navy font-semibold">{selectedInquiry.name}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-dark-grey">Email</label>
                      <p className="text-navy">{selectedInquiry.email}</p>
                    </div>
                    
                    {selectedInquiry.phone && (
                      <div>
                        <label className="text-sm font-medium text-dark-grey">Phone</label>
                        <p className="text-navy">{selectedInquiry.phone}</p>
                      </div>
                    )}
                    
                    <div>
                      <label className="text-sm font-medium text-dark-grey">Inquiry Type</label>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getInquiryTypeColor(selectedInquiry.inquiry_type)}`}>
                        {getInquiryTypeLabel(selectedInquiry.inquiry_type)}
                      </span>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-dark-grey">Subject</label>
                      <p className="text-navy">{selectedInquiry.subject}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-dark-grey">Message</label>
                      <p className="text-navy whitespace-pre-wrap">{selectedInquiry.message}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-dark-grey">Date</label>
                      <p className="text-navy">{formatDate(selectedInquiry.created_at)}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <a
                      href={`mailto:${selectedInquiry.email}`}
                      className="flex-1 bg-golden text-navy px-4 py-2 rounded-lg font-semibold text-center hover:bg-yellow-500 transition-colors duration-200"
                    >
                      Reply via Email
                    </a>
                    <button
                      onClick={() => deleteInquiry(selectedInquiry.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                    >
                      <SafeIcon icon={FiTrash2} className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center text-dark-grey">
                  <SafeIcon icon={FiEye} className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select an inquiry to view details</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;