const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your schemes data
const schemesData = {
        'Punjab': {
          'Rabi': ['Wheat MSP', 'Irrigation Subsidy', 'Crop Insurance'],
          'Kharif': ['Rice MSP', 'Fertilizer Subsidy', 'Farm Loans']
        },
        'Maharashtra': {
          'Rabi': ['Cotton Support', 'Drought Relief', 'Seed Loans'],
          'Kharif': ['Sugarcane MSP', 'Water Harvesting Scheme']
        },
        'Uttar Pradesh': {
        'Rabi': ['Wheat MSP', 'Loan Waivers for Small Farmers', 'Tractor Subsidy', 'Pest Control Assistance'],
        'Kharif': ['Paddy MSP', 'Fertilizer Subsidy', 'Cold Storage Facilities', 'Rural Livelihood Programs']
      },
      'Tamil Nadu': {
        'Rabi': ['Millet Cultivation Promotion', 'Farm Mechanization Subsidy', 'Crop Insurance', 'Agri-Extension Services'],
        'Kharif': ['Paddy MSP', 'Irrigation Equipment Subsidy', 'Agricultural Infrastructure Loans', 'Organic Manure Subsidy']
      },
      'Gujarat': {
        'Rabi': ['Groundnut MSP', 'Agri-Entrepreneurship Programs', 'Drip Irrigation Subsidy', 'Cold Storage Facilities'],
        'Kharif': ['Cotton MSP', 'Water Conservation Schemes', 'Seed Loan Programs', 'Animal Husbandry Support']
      },
      'Rajasthan': {
        'Rabi': ['Wheat and Barley MSP', 'Drought Management Programs', 'Subsidized Fertilizers', 'Irrigation Canal Support'],
        'Kharif': ['Bajra MSP', 'Watershed Development Scheme', 'Farmer Producer Organizations (FPO) Support', 'Livestock Insurance']
      },
      'West Bengal': {
        'Rabi': ['Wheat MSP', 'Seed Distribution Scheme', 'Irrigation Projects', 'Storage Infrastructure Support'],
        'Kharif': ['Rice MSP', 'Organic Farming Promotion', 'Subsidized Agri Loans', 'Fishery and Aquaculture Promotion']
      },
      'Bihar': {
        'Rabi': ['Wheat MSP', 'Power Tiller Subsidy', 'Crop Insurance', 'Small Farm Mechanization Scheme'],
        'Kharif': ['Maize MSP', 'Flood Management Programs', 'Subsidized Fertilizers', 'Loan Waivers for Marginal Farmers']
      },
      'Odisha': {
        'Rabi': ['Pulses and Oilseeds MSP', 'Seed Distribution Program', 'Irrigation Subsidy', 'Storage and Transport Support'],
        'Kharif': ['Paddy MSP', 'Water Management Schemes', 'Organic Farming Promotion', 'Small Farmer Credit Support']
      },
      'Assam': {
        'Rabi': ['Mustard and Pulses MSP', 'Flood Relief Schemes', 'Crop Insurance', 'Farm Mechanization Support'],
        'Kharif': ['Rice MSP', 'Subsidized Loans for Marginal Farmers', 'Livestock Development Program', 'Horticulture Support']
      },
      'Kerala': {
        'Rabi': ['Pepper and Coffee MSP', 'Crop Insurance', 'Irrigation Support', 'Horticulture Infrastructure Development'],
        'Kharif': ['Paddy MSP', 'Water Harvesting Scheme', 'Agri-Processing Subsidy', 'Fishery and Coastal Livelihood Support']
      },
      'Andhra Pradesh': {
        'Rabi': ['Groundnut and Pulses MSP', 'Fertilizer Subsidy', 'Crop Loan Waiver Scheme', 'Horticulture Development Programs'],
        'Kharif': ['Rice and Cotton MSP', 'Agri-Processing Units Support', 'Irrigation Projects', 'Organic Fertilizer Subsidy']
      },
      'Telangana': {
        'Rabi': ['Cotton MSP', 'Irrigation Projects', 'Pest Management Schemes', 'Seed Subsidy'],
        'Kharif': ['Rice MSP', 'Fertilizer Support', 'Farm Loan Waiver', 'Agri-Livelihood Programs']
      },
      'Haryana': {
        'Rabi': ['Wheat MSP', 'Crop Insurance', 'Subsidized Irrigation Equipment', 'Farm Mechanization Schemes'],
        'Kharif': ['Paddy MSP', 'Water Conservation Programs', 'Agri-Infrastructure Loans', 'Livestock Insurance']
      },
      'Jharkhand': {
        'Rabi': ['Pulses MSP', 'Seed Distribution Schemes', 'Irrigation Development Support', 'Rainfed Agriculture Support'],
        'Kharif': ['Rice MSP', 'Drought Relief Programs', 'Farm Input Subsidies', 'Tribal Agriculture Promotion']
      },
      'Chhattisgarh': {
        'Rabi': ['Wheat MSP', 'Cold Storage Facilities', 'Irrigation Support', 'Fertilizer Distribution Schemes'],
        'Kharif': ['Rice MSP', 'Horticulture Development Programs', 'Organic Farming Support', 'Drought Management']
      },
      'Himachal Pradesh': {
        'Rabi': ['Barley MSP', 'Subsidized Fertilizer Programs', 'Livestock Management Schemes', 'Horticulture Promotion'],
        'Kharif': ['Maize MSP', 'Apple and Fruit Cultivation Support', 'Cold Storage Schemes', 'Organic Farming Subsidies']
      },
      'Jammu and Kashmir': {
        'Rabi': ['Wheat MSP', 'Cold Storage Facilities', 'Apple MSP', 'Irrigation Canal Support'],
        'Kharif': ['Paddy MSP', 'Horticulture Promotion', 'Subsidized Seeds and Fertilizers', 'Livelihood Support Programs']
      },
      'North-East States (Nagaland, Manipur, Tripura, Mizoram)': {
        'Rabi': ['Mustard MSP', 'Agri Infrastructure Support', 'Subsidized Livestock Loans', 'Rainwater Harvesting'],
        'Kharif': ['Rice MSP', 'Organic Farming Schemes', 'Cold Storage Development', 'Fishery Development Programs']
      }
  // Add more states and schemes here
};

// API route to get schemes based on region and season
app.get('/get-schemes', (req, res) => {
  const region = req.query.region;
  const season = req.query.season;
  const schemes = schemesData[region] ? schemesData[region][season] : [];
  res.json({ schemes });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});