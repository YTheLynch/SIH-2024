from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

schemes_data = {
    'Beti Bachao Beti Padhao': {'min_age': 0, 'max_age': 18, 'sex': 'F', 'income_threshold': None, 'organization': 'NCW, ASHA'},
    'One Stop Centre': {'min_age': 18, 'max_age': None, 'sex': 'F', 'income_threshold': None, 'organization': 'NCW, ASHA'},
    'Women Helpline Scheme': {'min_age': 18, 'max_age': None, 'sex': 'F', 'income_threshold': None, 'organization': 'NCW, ASHA'},
    'Ujjawala': {'min_age': 18, 'max_age': None, 'sex': 'F', 'income_threshold': None, 'organization': 'NCW'},
    'Pradhan Mantri Matru Vandana Yojana': {'min_age': 18, 'max_age': 45, 'sex': 'F', 'income_threshold': 250000, 'organization': 'NCW, ASHA'},
    'Mahila Police Volunteers': {'min_age': 21, 'max_age': None, 'sex': 'F', 'income_threshold': None, 'organization': 'NCW, Police Departments'},
    'Working Women Hostel': {'min_age': 18, 'max_age': None, 'sex': 'F', 'income_threshold': None, 'organization': 'NCW'},
    'SWADHAR Greh': {'min_age': 18, 'max_age': None, 'sex': 'F', 'income_threshold': None, 'organization': 'NCW, ASHA'},
    'Support to Training and Employment Programme for Women (STEP)': {'min_age': 16, 'max_age': None, 'sex': 'F', 'income_threshold': None, 'organization': 'NCW'},
    'Pradhan Mantri Garib Kalyan Yojana': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'NITI Aayog'},
    'Pradhan Mantri Jan Dhan Yojana': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'RRB, NITI Aayog'},
    'Pradhan Mantri Jeevan Jyoti Bima Yojana': {'min_age': 18, 'max_age': 50, 'sex': None, 'income_threshold': 200000, 'organization': 'IRDAI'},
    'Pradhan Mantri Suraksha Bima Yojana': {'min_age': 18, 'max_age': 70, 'sex': None, 'income_threshold': None, 'organization': 'IRDAI'},
    'Atal Pension Yojana': {'min_age': 18, 'max_age': 40, 'sex': None, 'income_threshold': None, 'organization': 'PFRDA'},
    'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (PM-JAY)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'NHA'},
    'Pradhan Mantri Awas Yojana (Gramin)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'HUDCO'},
    'Pradhan Mantri Gram Sadak Yojana (PMGSY)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'NABARD'},
    'Deendayal Antyodaya Yojana-National Rural Livelihoods Mission (DAY-NRLM)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'NABARD'},
    'Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)': {'min_age': 18, 'max_age': 35, 'sex': None, 'income_threshold': None, 'organization': 'NABARD'},
    'National Social Assistance Programme (NSAP)': {'min_age': 60, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Rural Development'},
    'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Agriculture'},
    'Kisan Credit Card (KCC)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'NABARD'},
    'PM SVANidhi': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'SIDBI'},
    'Stand-Up India': {'min_age': 18, 'max_age': None, 'sex': 'F', 'income_threshold': None, 'organization': 'SIDBI'},
    'Sukanya Samriddhi Yojana': {'min_age': 0, 'max_age': 10, 'sex': 'F', 'income_threshold': None, 'organization': 'Post Offices'},
    'National Means Cum Merit Scholarship': {'min_age': 12, 'max_age': 15, 'sex': None, 'income_threshold': 150000, 'organization': 'Ministry of Education'},
    'National Scheme for Incentive to Girls for Secondary Education (NSIGSE)': {'min_age': 14, 'max_age': 18, 'sex': 'F', 'income_threshold': None, 'organization': 'NCERT'},
    'National Talent Search Scheme': {'min_age': 13, 'max_age': 16, 'sex': None, 'income_threshold': None, 'organization': 'NCERT'},
    'Merit-cum-Means Scholarship for Professional and Technical Courses': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': 250000, 'organization': 'Ministry of Minority Affairs'},
    'Post-Matric Scholarship Scheme for Minorities': {'min_age': 15, 'max_age': None, 'sex': None, 'income_threshold': 200000, 'organization': 'Ministry of Minority Affairs'},
    'Begum Hazrat Mahal National Scholarship': {'min_age': 14, 'max_age': None, 'sex': 'F', 'income_threshold': 200000, 'organization': 'Ministry of Minority Affairs'},
    'Pradhan Mantri Fasal Bima Yojana (PMFBY)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'NABARD, IRDAI'},
    'National Health Mission': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'NHA'},
    'Mid-Day Meal Scheme': {'min_age': 6, 'max_age': 14, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Education'},
    'National Apprenticeship Promotion Scheme (NAPS)': {'min_age': 14, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Skill Development'},
    'Samagra Shiksha': {'min_age': 6, 'max_age': 18, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Education'},
    'National Rural Drinking Water Programme (NRDWP)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Jal Shakti'},
    'Jal Jeevan Mission': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Jal Shakti'},
    'Swachh Bharat Mission (SBM)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Jal Shakti'},
    'Pradhan Mantri Ujjwala Yojana': {'min_age': 18, 'max_age': None, 'sex': 'F', 'income_threshold': 100000, 'organization': 'Ministry of Petroleum'},
    'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Skill Development'},
    'Rashtriya Gokul Mission': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Animal Husbandry'},
    'National Dairy Plan': {'min_age': 18, 'max_age': None, 'sex': None, 'income_threshold': None, 'organization': 'Ministry of Dairy Development'}
}

city_state_data = {
    'Delhi': {'state': 'Delhi', 'literacy_rate': 89.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'None'},
    'Mumbai': {'state': 'Maharashtra', 'literacy_rate': 88.0, 'city_female_ratio': 0.50, 'seasonal_farming_cycle': 'None'},
    'Chennai': {'state': 'Tamil Nadu', 'literacy_rate': 90.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'None'},
    'Kolkata': {'state': 'West Bengal', 'literacy_rate': 87.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'None'},
    'Bengaluru': {'state': 'Karnataka', 'literacy_rate': 88.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Kharif'},
    'Hyderabad': {'state': 'Telangana', 'literacy_rate': 83.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Pune': {'state': 'Maharashtra', 'literacy_rate': 89.0, 'city_female_ratio': 0.50, 'seasonal_farming_cycle': 'Rabi'},
    'Ahmedabad': {'state': 'Gujarat', 'literacy_rate': 81.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Jaipur': {'state': 'Rajasthan', 'literacy_rate': 81.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Lucknow': {'state': 'Uttar Pradesh', 'literacy_rate': 72.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Chandigarh': {'state': 'Chandigarh', 'literacy_rate': 86.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'None'},
    'Kanpur': {'state': 'Uttar Pradesh', 'literacy_rate': 77.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Nagpur': {'state': 'Maharashtra', 'literacy_rate': 85.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Indore': {'state': 'Madhya Pradesh', 'literacy_rate': 86.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Rabi'},
    'Bhopal': {'state': 'Madhya Pradesh', 'literacy_rate': 70.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Rabi'},
    'Patna': {'state': 'Bihar', 'literacy_rate': 62.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Kharif'},
    'Varanasi': {'state': 'Uttar Pradesh', 'literacy_rate': 73.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Visakhapatnam': {'state': 'Andhra Pradesh', 'literacy_rate': 66.0, 'city_female_ratio': 0.50, 'seasonal_farming_cycle': 'Kharif'},
    'Coimbatore': {'state': 'Tamil Nadu', 'literacy_rate': 85.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Rabi'},
    'Thiruvananthapuram': {'state': 'Kerala', 'literacy_rate': 96.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Kharif'},
    'Kochi': {'state': 'Kerala', 'literacy_rate': 93.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Shillong': {'state': 'Meghalaya', 'literacy_rate': 87.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'None'},
    'Imphal': {'state': 'Manipur', 'literacy_rate': 76.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Aizawl': {'state': 'Mizoram', 'literacy_rate': 91.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'None'},
    'Agartala': {'state': 'Tripura', 'literacy_rate': 87.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Gangtok': {'state': 'Sikkim', 'literacy_rate': 81.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'None'},
    'Itanagar': {'state': 'Arunachal Pradesh', 'literacy_rate': 66.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'None'},
    'Ranchi': {'state': 'Jharkhand', 'literacy_rate': 67.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Bhubaneswar': {'state': 'Odisha', 'literacy_rate': 82.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Kharif'},
    'Raipur': {'state': 'Chhattisgarh', 'literacy_rate': 71.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Guwahati': {'state': 'Assam', 'literacy_rate': 87.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Kharif'},
    'Dehradun': {'state': 'Uttarakhand', 'literacy_rate': 80.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Haridwar': {'state': 'Uttarakhand', 'literacy_rate': 79.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Jodhpur': {'state': 'Rajasthan', 'literacy_rate': 73.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Kota': {'state': 'Rajasthan', 'literacy_rate': 83.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Bikaner': {'state': 'Rajasthan', 'literacy_rate': 80.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Jaisalmer': {'state': 'Rajasthan', 'literacy_rate': 72.0, 'city_female_ratio': 0.43, 'seasonal_farming_cycle': 'Rabi'},
    'Ajmer': {'state': 'Rajasthan', 'literacy_rate': 78.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Aligarh': {'state': 'Uttar Pradesh', 'literacy_rate': 67.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Meerut': {'state': 'Uttar Pradesh', 'literacy_rate': 74.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Saharanpur': {'state': 'Uttar Pradesh', 'literacy_rate': 62.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Karnal': {'state': 'Haryana', 'literacy_rate': 78.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Rabi'},
    'Ambala': {'state': 'Haryana', 'literacy_rate': 81.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Rabi'},
    'Panipat': {'state': 'Haryana', 'literacy_rate': 82.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Rabi'},
    'Amritsar': {'state': 'Punjab', 'literacy_rate': 75.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Rabi'},
    'Ludhiana': {'state': 'Punjab', 'literacy_rate': 83.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Rabi'},
    'Patiala': {'state': 'Punjab', 'literacy_rate': 80.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Rabi'},
    'Shimla': {'state': 'Himachal Pradesh', 'literacy_rate': 82.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Dharamshala': {'state': 'Himachal Pradesh', 'literacy_rate': 80.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Rabi'},
    'Srinagar': {'state': 'Jammu and Kashmir', 'literacy_rate': 67.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Jammu': {'state': 'Jammu and Kashmir', 'literacy_rate': 70.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Udhampur': {'state': 'Jammu and Kashmir', 'literacy_rate': 66.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Pali': {'state': 'Rajasthan', 'literacy_rate': 70.0, 'city_female_ratio': 0.42, 'seasonal_farming_cycle': 'Rabi'},
    'Sikar': {'state': 'Rajasthan', 'literacy_rate': 74.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Bhilwara': {'state': 'Rajasthan', 'literacy_rate': 72.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Kota': {'state': 'Rajasthan', 'literacy_rate': 83.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Nagaur': {'state': 'Rajasthan', 'literacy_rate': 69.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Chittorgarh': {'state': 'Rajasthan', 'literacy_rate': 76.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Jalgaon': {'state': 'Maharashtra', 'literacy_rate': 75.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Kharif'},
    'Solapur': {'state': 'Maharashtra', 'literacy_rate': 75.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Nanded': {'state': 'Maharashtra', 'literacy_rate': 72.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Kharif'},
    'Aurangabad': {'state': 'Maharashtra', 'literacy_rate': 76.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Kolhapur': {'state': 'Maharashtra', 'literacy_rate': 77.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Sangli': {'state': 'Maharashtra', 'literacy_rate': 73.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Kharif'},
    'Satara': {'state': 'Maharashtra', 'literacy_rate': 74.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Ratnagiri': {'state': 'Maharashtra', 'literacy_rate': 71.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Kharif'},
    'Jalna': {'state': 'Maharashtra', 'literacy_rate': 72.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Kharif'},
    'Ahmednagar': {'state': 'Maharashtra', 'literacy_rate': 70.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Kharif'},
    'Dhule': {'state': 'Maharashtra', 'literacy_rate': 68.0, 'city_female_ratio': 0.43, 'seasonal_farming_cycle': 'Kharif'},
    'Nashik': {'state': 'Maharashtra', 'literacy_rate': 72.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Amravati': {'state': 'Maharashtra', 'literacy_rate': 70.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Kharif'},
    'Bhavnagar': {'state': 'Gujarat', 'literacy_rate': 80.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Surat': {'state': 'Gujarat', 'literacy_rate': 82.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Kharif'},
    'Vadodara': {'state': 'Gujarat', 'literacy_rate': 79.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Kharif'},
    'Rajkot': {'state': 'Gujarat', 'literacy_rate': 77.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Junagadh': {'state': 'Gujarat', 'literacy_rate': 70.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Kharif'},
    'Gandhinagar': {'state': 'Gujarat', 'literacy_rate': 84.0, 'city_female_ratio': 0.50, 'seasonal_farming_cycle': 'Kharif'},
    'Vapi': {'state': 'Gujarat', 'literacy_rate': 72.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Kharif'},
    'Jamnagar': {'state': 'Gujarat', 'literacy_rate': 76.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Daman': {'state': 'Daman and Diu', 'literacy_rate': 82.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Kharif'},
    'Panaji': {'state': 'Goa', 'literacy_rate': 89.0, 'city_female_ratio': 0.51, 'seasonal_farming_cycle': 'Kharif'},
    'Vasco da Gama': {'state': 'Goa', 'literacy_rate': 87.0, 'city_female_ratio': 0.50, 'seasonal_farming_cycle': 'Kharif'},
    'Margao': {'state': 'Goa', 'literacy_rate': 84.0, 'city_female_ratio': 0.52, 'seasonal_farming_cycle': 'Kharif'},
    'Bhubaneswar': {'state': 'Odisha', 'literacy_rate': 93.0, 'city_female_ratio': 0.50, 'seasonal_farming_cycle': 'Kharif'},
    'Cuttack': {'state': 'Odisha', 'literacy_rate': 88.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Kharif'},
    'Rourkela': {'state': 'Odisha', 'literacy_rate': 85.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Ranchi': {'state': 'Jharkhand', 'literacy_rate': 83.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Kharif'},
    'Jamshedpur': {'state': 'Jharkhand', 'literacy_rate': 85.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Dhanbad': {'state': 'Jharkhand', 'literacy_rate': 80.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Kharif'},
    'Gaya': {'state': 'Bihar', 'literacy_rate': 74.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Muzaffarpur': {'state': 'Bihar', 'literacy_rate': 70.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Bhagalpur': {'state': 'Bihar', 'literacy_rate': 66.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Rabi'},
    'Patna': {'state': 'Bihar', 'literacy_rate': 75.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Silchar': {'state': 'Assam', 'literacy_rate': 85.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Guwahati': {'state': 'Assam', 'literacy_rate': 90.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Dibrugarh': {'state': 'Assam', 'literacy_rate': 82.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Kharif'},
    'Itanagar': {'state': 'Arunachal Pradesh', 'literacy_rate': 85.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Gangtok': {'state': 'Sikkim', 'literacy_rate': 95.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Kharif'},
    'Agartala': {'state': 'Tripura', 'literacy_rate': 87.0, 'city_female_ratio': 0.50, 'seasonal_farming_cycle': 'Kharif'},
    'Shillong': {'state': 'Meghalaya', 'literacy_rate': 85.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Imphal': {'state': 'Manipur', 'literacy_rate': 79.0, 'city_female_ratio': 0.49, 'seasonal_farming_cycle': 'Kharif'},
    'Aizawl': {'state': 'Mizoram', 'literacy_rate': 95.0, 'city_female_ratio': 0.51, 'seasonal_farming_cycle': 'Kharif'},
    'Kohima': {'state': 'Nagaland', 'literacy_rate': 84.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Kharif'},
    'Dimapur': {'state': 'Nagaland', 'literacy_rate': 83.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Kharif'},
    'Agra': {'state': 'Uttar Pradesh', 'literacy_rate': 74.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Kanpur': {'state': 'Uttar Pradesh', 'literacy_rate': 78.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Varanasi': {'state': 'Uttar Pradesh', 'literacy_rate': 77.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Firozabad': {'state': 'Uttar Pradesh', 'literacy_rate': 69.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Lucknow': {'state': 'Uttar Pradesh', 'literacy_rate': 82.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Rabi'},
    'Aligarh': {'state': 'Uttar Pradesh', 'literacy_rate': 67.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Jabalpur': {'state': 'Madhya Pradesh', 'literacy_rate': 75.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Gwalior': {'state': 'Madhya Pradesh', 'literacy_rate': 78.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
    'Indore': {'state': 'Madhya Pradesh', 'literacy_rate': 83.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Rabi'},
    'Bhopal': {'state': 'Madhya Pradesh', 'literacy_rate': 82.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Rabi'},
    'Ujjain': {'state': 'Madhya Pradesh', 'literacy_rate': 76.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Sagar': {'state': 'Madhya Pradesh', 'literacy_rate': 74.0, 'city_female_ratio': 0.46, 'seasonal_farming_cycle': 'Rabi'},
    'Satna': {'state': 'Madhya Pradesh', 'literacy_rate': 72.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Rabi'},
    'Rewa': {'state': 'Madhya Pradesh', 'literacy_rate': 70.0, 'city_female_ratio': 0.45, 'seasonal_farming_cycle': 'Rabi'},
    'Bhopal': {'state': 'Madhya Pradesh', 'literacy_rate': 82.0, 'city_female_ratio': 0.48, 'seasonal_farming_cycle': 'Rabi'},
    'Indore': {'state': 'Madhya Pradesh', 'literacy_rate': 83.0, 'city_female_ratio': 0.47, 'seasonal_farming_cycle': 'Rabi'},
    'Gwalior': {'state': 'Madhya Pradesh', 'literacy_rate': 78.0, 'city_female_ratio': 0.44, 'seasonal_farming_cycle': 'Rabi'},
}



def recommend_schemes(age, city, income=None, gender=None):
    # Convert user input city to title case for case-insensitive matching
    city = city.title()
    
    # Convert city names in city_state_data to title case for comparison
    normalized_city_state_data = {name.title(): info for name, info in city_state_data.items()}
    
    if city not in normalized_city_state_data:
        return {'success':'false', 'message': 'City data not available'}
    
    city_info = normalized_city_state_data[city]
    city_female_ratio = city_info['city_female_ratio']
    farming_cycle = city_info['seasonal_farming_cycle']
    
    eligible_schemes = []
    for scheme, criteria in schemes_data.items():
        # Check age constraints
        if criteria.get('min_age') is not None and age < criteria['min_age']:
            continue
        if criteria.get('max_age') is not None and age > criteria['max_age']:
            continue
        
        # Check sex constraints
        if criteria.get('sex') is not None:
            if gender is None:
                continue
            if criteria['sex'] == 'F' and gender != 'F':
                continue
            if criteria['sex'] == 'M' and gender != 'M':
                continue
        
        # Check income constraints
        if criteria.get('income_threshold') is not None and (income is None or income > criteria['income_threshold']):
            continue
        
        # City-specific constraints
        # if city_female_ratio < 0.48 and criteria.get('sex') == 'F':
        #     # If city has a lower female ratio and scheme is female-centric, consider it
        #     continue
        
        # Consider seasonal farming cycle
        if criteria.get('farming_cycle') and criteria['farming_cycle'] != farming_cycle:
            continue
        
        eligible_schemes.append({
            'scheme': scheme,
            'organization': criteria['organization']
        })
    
    # Add specific schemes for users who identify as non-binary or prefer not to specify
    if gender not in ['M', 'F']:
        eligible_schemes.extend([
            {'scheme': 'SMILE: Comprehensive Rehabilitation For Welfare of Transgender Persons', 'organization': 'Transgender Welfare Org'},
            {'scheme': 'Garima Greh Shelter Homes For Transgender Persons', 'organization': 'Transgender Welfare Org'}
        ])
    
    # Display results
    if not eligible_schemes:
        return {'success':'false', 'message': 'No schemes match the given criteria'} 
    
    result = []
    for scheme in eligible_schemes:
        result.append({'scheme': scheme['scheme'], 'organization': scheme['organization']})

    return {'result': 'success', 'message': result}

# User input
# print("Enter your details to find suitable schemes:")
# age = int(input("Enter your age: "))
# city = input("Enter your city: ").strip().title()  # Convert city input to title case
# income = input("Enter your income (optional, press Enter to skip): ")
# income = int(income) if income else None
# female = input("Are you female? (yes/no): ").strip().lower() == 'yes'

# Get recommendations
# recommendations = recommend_schemes(age, city, income, female)
# print("\n" + recommendations)

@app.route('/predict', methods = ['POST'])
def predict():
    data = request.json
    age = int(data.get('age'))
    city = data.get('city')
    income = int(data.get('familyIncome'))
    gender = data.get('gender')
    if gender == 'male':
        gender = 'M'
    elif gender == 'female':
        gender = 'F'
    else:
        gender = 'O' 
    
    recommendations = recommend_schemes(age, city, income, gender)
    return jsonify(recommendations)

if __name__ == '__main__':   
    app.run(debug = True)